import React from "react";
import { shallow } from "enzyme";

import UserComment from "./UserComment";

describe("UserComment", () => {
  it("should render correctly with sample data", () => {
    const sampleData = {
      name: "Name",
      role: "tester",
      duration: "20",
      comment: "sample small component",
      replies: 10,
      upVote: 100,
      downVote: 50,
    };

    const cmp = shallow(<UserComment data={sampleData} />);
    expect(cmp).toMatchSnapshot();
  });
