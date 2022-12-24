import React from "react";
import { PageWaterLoader, RecentPodcasts } from "@app/components";
import { getAdminLayout } from "@app/layouts/hooks";
import { useRecentPodcasts } from "@utils/graphql/hooks/podcast";
import { NextPageWithLayout } from "pages/_app";
import { useAppDispatch } from "@utils/store/hooks";
import { setPocastList } from "@utils/store/slices/podcastListSlice";

const AdminDashBoard: NextPageWithLayout = () => {
  const { loading, data } = useRecentPodcasts();
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    if (data !== null && data !== undefined) {
      dispatch(setPocastList(data.allPodcasts));
    }
  }, [data]);

  if (loading) {
    return <PageWaterLoader />;
  }
  return (
    <div className="p-3 flex w-full justify-start">
      <RecentPodcasts />
    </div>
  );
};

AdminDashBoard.getLayout = getAdminLayout;
export default AdminDashBoard;
