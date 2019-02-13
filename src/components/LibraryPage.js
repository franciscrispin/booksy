import React from "react";
import { withRouter } from "react-router-dom";
import Toolbar from "./Toolbar";
import Panel from "./Panel";
import CardList from "./CardList";

class LibraryPage extends React.Component {
  componentDidMount() {
    const params = this.props.match.params.visibility_filter;
    if (params !== "all" && params !== "to_read" && params !== "completed") {
      return this.props.history.push("/library/all");
    }
  }

  render() {
    return (
      <div>
        <Toolbar />
        <Panel page="library" />
        <CardList />
      </div>
    );
  }
}

export default withRouter(LibraryPage);
