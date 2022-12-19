import { StaffType } from "@utils/graphql/codegen/graphql";
import React from "react";
import { StaffDropDownContextType } from "./StaffDropDownList";

interface StaffDropDownItemProps {
  staff: StaffType;
  context: React.Context<StaffDropDownContextType>;
}

const StaffDropDownItem: React.FC<StaffDropDownItemProps> = (props) => {
  const { staff, context } = props;
  const ctx = React.useContext(context);
  const handleClick = (): void => {
    ctx.setStaff(staff);
  };
  return (
    <button
      type="button"
      onClick={handleClick}
      className="p-3 hover:bg-ui-pink-40 w-full flex items-center transition-all rounded"
    >
      {staff.user?.fullName ?? staff.user?.email}
    </button>
  );
};

export default StaffDropDownItem;
