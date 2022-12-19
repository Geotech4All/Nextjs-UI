import { AnimatePresence, motion } from "framer-motion";
import { StaffType } from "@utils/graphql/codegen/graphql";
import { useStaffList } from "@utils/graphql/hooks/podcast";
import React from "react";
import { StaffDropDownItem } from "@app/components";

export interface StaffDropDownContextType {
  staff?: StaffType;
  setStaff: React.Dispatch<React.SetStateAction<StaffType | undefined>>;
}
interface StaffDropDownListProps {
  getHost: (host: StaffType) => void;
}
const StaffDropDownList: React.FC<StaffDropDownListProps> = (props) => {
  const { getHost } = props;
  const { data, loading } = useStaffList();
  const [dropdownOpen, setDropDownOpen] = React.useState(true);
  const [staff, setStaff] = React.useState<StaffType>();
  const defVall = {
    staff,
    setStaff
  };

  const StaffCtx = React.createContext<StaffDropDownContextType>(defVall);
  const staffContext = React.useContext(StaffCtx);

  React.useEffect(() => {
    if (staffContext.staff !== undefined) {
      getHost(staffContext.staff);
    }
  }, [staffContext]);

  const placeholder = staffContext.staff?.user?.fullName ?? staffContext.staff?.user?.email;

  if (loading) {
    return <div>Loading....</div>;
  }

  const handleDropDown = (): void => {
    if (dropdownOpen) {
      setDropDownOpen(false);
    } else {
      setDropDownOpen(true);
    }
  };

  return (
    <StaffCtx.Provider value={defVall}>
      <div className="rounded-lg p-1 gap-1 flex flex-col">
        <label htmlFor="staff_list">Host</label>
        <button
          id="staff_list"
          onClick={handleDropDown}
          type="button"
          className={`
          ${staffContext.staff === undefined ? "bg-purple-400" : "bg-purple-700"}
          border-2 w-full flex text-white font-bold
          items-start rounded-md p-2`}
        >
          {staffContext.staff !== undefined ? placeholder : "Select Host"}
        </button>
        <AnimatePresence>
          {dropdownOpen && (
            <motion.ul
              key={Math.random()}
              exit={{ height: 0, transition: { duration: 0.5 } }}
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              className="shadow rounded"
            >
              {data?.staffList?.map((staff) => (
                <StaffDropDownItem context={StaffCtx} key={staff.id} staff={staff} />
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </StaffCtx.Provider>
  );
};

export default StaffDropDownList;
