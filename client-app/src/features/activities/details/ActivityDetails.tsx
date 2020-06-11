import React, { useContext, useEffect } from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import ActivityStore from "../../../app/stores/activityStore";
import { observer } from "mobx-react-lite";
import { RouteComponentProps } from "react-router-dom";
import { LoadingComponent } from "../../../app/layout/LoadingComponent";
import ActivityDetailedHeader from "./ActivityDetailedHeader";
import ActivityDetailedInfo from "./ActivityDetailedInfo";
import AcitvityDetailedChat from "./AcitvityDetailedChat";
import ActivityDetailedSideBar from "./ActivityDetailedSideBar";

interface DetailParams {
  id: string;
}
const ActivityDetails: React.FC<RouteComponentProps<DetailParams>> = ({
  match,
}) => {
  const activityStore = useContext(ActivityStore);
  const { activity, loadActivity, loadinInitial } = activityStore;
  useEffect(() => {
    loadActivity(match.params.id);
  }, [loadActivity, match.params.id]);

  if (loadinInitial || !activity)
    return <LoadingComponent content="Loading activity..." />;

  return (
    <Grid>
      <GridColumn width={10}>
        <ActivityDetailedHeader activity={activity} />
        <ActivityDetailedInfo activity={activity} />
        <AcitvityDetailedChat />
      </GridColumn>
      <GridColumn width={6}>
        <ActivityDetailedSideBar />
      </GridColumn>
    </Grid>
  );
};

export default observer(ActivityDetails);
