import { mount } from "vue-test-utils";
import Login from "../src/components/Login.vue";
import expect from "expect";
import router from "../src/router";

describe("Login Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Login, {
      router: router
    });
  });

  it("loads the login component", () => {
    expect(wrapper.is(".login-component")).toEqual(true);
  });

  it("has a title of a better todo", () => {
    expect(wrapper.find(".title").text()).toBe("A Better Todo");
  });

  it("has a subtitle of login", () => {
    expect(wrapper.find(".subtitle").text()).toBe("Login");
  });

  it("can add an email", () => {
    wrapper.setData({ email: "example@example.com" });
    expect(wrapper.find(".email-input").element.value).toBe(
      "example@example.com"
    );
  });

  it("can add a password", () => {
    wrapper.setData({ password: "password" });
    expect(wrapper.find(".password-input").element.value).toBe("password");
  });

  it("has a login button", () => {
    expect(wrapper.find(".login-btn").text()).toBe("Login");
  });

  it("has a create account button", () => {
    expect(wrapper.find(".create-btn").text()).toBe("Create Account");
  });
});
