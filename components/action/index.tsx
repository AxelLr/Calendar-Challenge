import { MapPinIcon } from "react-native-heroicons/solid";
import { Action as IAction, Customer } from "@/models/ChallengeData";
import { getActionProperties } from "./helpers";
import { CardTypography } from "./styles";
// COMPONENTS
import Box from "@/components/layout/Box";
import Typography from "@/components/Typography";

export interface ActionProps extends IAction {
  customer: Customer;
}

const Action: React.FC<ActionProps> = (props) => {
  const { name, vendor, customer } = props;

  const {
    icon: ActionIcon,
    backgroundColor,
    statusText,
    dayName,
    dayOfMonth,
  } = getActionProperties(props);

  return (
    <Box flexDirection="row">
      <Box alignItems="center" pr="8px" width={40}>
        <Box alignItems="center">
          <Typography fontWeight="bold" fontSize={12} color="#666">
            {dayName}
          </Typography>
          <Typography fontWeight="bold" fontSize={26} mt="3px" mb="5px">
            {dayOfMonth}
          </Typography>
          {ActionIcon && <ActionIcon size={25} color="#00B47D" />}
        </Box>
      </Box>

      <Box borderRadius={7.5} flex={1} px={20} py={14} bg={backgroundColor}>
        <CardTypography fontWeight="bold" fontSize={20}>
          {name}
        </CardTypography>

        {vendor && (
          <>
            <CardTypography>{vendor.vendorName}</CardTypography>
            <CardTypography fontWeight="bold" fontSize={16}>
              {vendor.phoneNumber}
            </CardTypography>
          </>
        )}

        <Box flexDirection="row" alignItems="center" marginTop={12}>
          <MapPinIcon size={14} color="#fff" />
          <CardTypography ml={0.75}>{customer?.street}</CardTypography>
        </Box>

        <CardTypography>{statusText}</CardTypography>
      </Box>
    </Box>
  );
};

export default Action;
