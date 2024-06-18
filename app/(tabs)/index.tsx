import { SectionList, StyleSheet, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MONTHS, CALENDAR_ACTIONS } from "@/constants";
import { Action as IAction, ChallengeData } from "../../models/ChallengeData";
// HOOKS
import useFetch from "@/hooks/useFetch";
// COMPONENTS
import Box from "@/components/layout/Box";
import Action from "@/components/action";
import Typography from "@/components/Typography";
import EmptySection from "@/components/action/empty";

const getDateOrderedActions = (actions: IAction[]) =>
  [...actions].sort((a, b) => {
    if (a.scheduledDate && b.scheduledDate) {
      return a.scheduledDate.localeCompare(b.scheduledDate);
    }
    return 0;
  });

const Calendar = () => {
  const { data, isLoading, error } = useFetch<ChallengeData>(CALENDAR_ACTIONS);

  const monthlyActions =
    data?.calendar.map((calendar) => ({
      data: getDateOrderedActions(calendar.actions),
      title: `${MONTHS[calendar.month]} ${calendar.year}`,
    })) || [];

  const loadingView = (
    <Box flex={1} justifyContent="center" alignItems="center">
      <ActivityIndicator size="large" color="#848FA5" />
    </Box>
  );

  const errorView = (
    <Box flex={1} justifyContent="center" alignItems="center">
      <Typography color="#ff0000">Error: {error?.message}</Typography>
    </Box>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <Box pt={20} pb={10} borderBottomColor="#666" borderBottomWidth={0.25}>
        <Typography textAlign="center" fontSize={20} fontWeight={500}>
          Calendar
        </Typography>
      </Box>
      {isLoading ? (
        loadingView
      ) : error ? (
        errorView
      ) : (
        <SectionList
          contentContainerStyle={styles.sectionListContainer}
          sections={monthlyActions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Action {...item} customer={data?.customer!} />
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Typography fontSize={20} fontWeight={600}>
              {title}
            </Typography>
          )}
          ItemSeparatorComponent={() => <Box bg="#fff" height={6} />}
          SectionSeparatorComponent={() => <Box bg="#fff" height={25} />}
          renderSectionFooter={({ section }) => (
            <EmptySection hasData={section.data.length > 0} />
          )}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  sectionListContainer: {
    paddingHorizontal: 16,
    marginTop: 26,
    paddingBottom: 16,
  },
});

export default Calendar;
