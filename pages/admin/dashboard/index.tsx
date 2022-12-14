import React from "react";
import { PageWaterLoader, RecentPodcasts } from "@app/components";
import { getAdminLayout } from "@app/layouts/hooks";
import { useAllPodcasts } from "@utils/graphql/hooks/podcast";
import { NextPageWithLayout } from "pages/_app";
import { useAppDispatch } from "@utils/store/hooks";
import { setPocastList } from "@utils/store/slices/podcastListSlice";

const AdminDashBoard: NextPageWithLayout = () => {
  const { loading, data, error } = useAllPodcasts();
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
    <div>
      <RecentPodcasts />
    </div>
  );
};

AdminDashBoard.getLayout = getAdminLayout;
export default AdminDashBoard;
