import { mount } from "vue-test-utils";
import Form from "../src/components/Form.vue";
import expect from "expect";

describe("Form Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Form);
  });

  it("loads the form component", () => {
    expect(wrapper.is(".form-component")).toEqual(true);
  });

  it("has a text box to enter a description", () => {
    expect(wrapper.find("#txt-input").exists()).toBe(true);
  });

  it("has an input for start date", () => {
    expect(wrapper.find(".start-date").exists()).toBe(true);
  });

  it("has an input for end date", () => {
    expect(wrapper.find(".end-date").exists()).toBe(true);
  });

  it("has a select for repeat", () => {
    expect(wrapper.find(".repeat-select").exists()).toBe(true);
  });

  it("has a button for adding a task", () => {
    expect(wrapper.find(".add-task").exists()).toBe(true);
  });

  it("has a button for canceling", () => {
    expect(wrapper.find(".cancel-btn").exists()).toBe(true);
  });

  it("add task button has text of add task", () => {
    expect(wrapper.find(".add-task").text()).toBe("Add Task");
  });

  it("has a select for catagory", () => {
    expect(wrapper.find(".catagories-select").exists()).toBe(true);
  });

  it("has three difficulty radio buttons", () => {
    expect(wrapper.find(".radio-buttons").exists()).toBe(true);
  });

  it("has has a show & hide completed task button", () => {
    expect(wrapper.find(".show-hide").exists()).toBe(true);
  });

  // TODO: Verify default values of repeat, catagory, and difficulty
});
