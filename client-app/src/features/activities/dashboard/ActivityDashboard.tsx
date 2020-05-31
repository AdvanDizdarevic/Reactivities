import { Grid } from "semantic-ui-react";
import ActivityList from "./ActivityList";
import { observer } from "mobx-react-lite";
import ActivityStore from "../../../app/stores/activityStore";
import React, { useEffect, useContext } from "react";
import { LoadingComponent } from "../../../app/layout/LoadingComponent";

const ActivityDashboard: React.FC = () => {
  const acitvityStore = useContext(ActivityStore);
  useEffect(() => {
    acitvityStore.loadActivities();
  }, [acitvityStore]);

  if (acitvityStore.loadinInitial)
    return <LoadingComponent content="Loading activities ..." />;
  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivityList />
      </Grid.Column>
      <Grid.Column width={6}>
        <h2>Activity filters</h2>
      </Grid.Column>
    </Grid>
  );
};

export default observer(ActivityDashboard);
