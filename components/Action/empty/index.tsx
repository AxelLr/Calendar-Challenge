import Typography from "@/components/Typography";
import Box from "@/components/layout/Box";

const EmptySection = ({ hasData }) =>
  !hasData ? (
    <Box pl={40} my={25}>
      <Box px={20} py={16} borderRadius={7.5} bg="#848FA5">
        <Typography fontSize={20} fontWeight="bold" color="#fff">
          No Maintenance Scheduled
        </Typography>
      </Box>
    </Box>
  ) : null;

export default EmptySection;
