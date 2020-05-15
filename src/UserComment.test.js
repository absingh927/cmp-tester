import React from "react";
import { shallow } from "enzyme";

import UserComment from "./UserComment";

describe("UserComment", () => {
  it("should render correctly with props", () => {
    const sampleData = {
      name: "Name",
      role: "tester",
      duration: "20",
      comment: "sample small component",
      replies: 10,
      upVote: 100,
      downVote: 50,
    };

    const component = shallow(<UserComment data={sampleData} />);
    expect(component).toMatchSnapshot();
  });
});
