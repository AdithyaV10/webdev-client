"use client";
import Link from "next/link";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import CounterBroken from "./CounterBroken";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ProfileForm from "./profile/ProfileForm";
import ParentStateComponent from "./ParentStateComponent";
import PropDrilling from "./PropDrilling";
import UrlEncoding from "./UrlEncoding";
import ContextExamples from "./context/ContextExamples";
import ContextProfileForm from "./context/ContextProfileForm";
import ZustandExamples from "./zustand/ZustandExamples";
import ZustandProfileForm from "./zustand/ZustandProfileForm";
import ReduxExamples from "./redux/ReduxExamples";
import Effect from "./Effect";
import WindowSizeDemo from "./hooks/WindowSizeDemo";
import ToggleDemo from "./hooks/ToggleDemo";
import LocalStorageDemo from "./hooks/LocalStorageDemo";
import IndependentToggles from "./hooks/IndependentToggles";
import HookProfileForm from "./hooks/HookProfileForm";
export default function Lab4() {
  const sayHello = (message: string) => alert(message);
  return <div id="wd-lab4"><h2>Lab 4</h2>
    <ClickEvent />
    <PassingDataOnEvent />
    <PassingFunctions message="Hello from Lab 4" theFunction={sayHello} personalFunction={() => alert("Adithya Varadarajan")} theOtherFunction={() => alert("Sample from parent")} />
    <CounterBroken />
    <Counter />
    <BooleanStateVariables />
    <StringStateVariables />
    <DateStateVariable />
    <ObjectStateVariable />
    <ArrayStateVariable />
    <ProfileForm />
    <ParentStateComponent />
    <PropDrilling />
    <UrlEncoding />
    <ContextExamples />
    <ContextProfileForm />
    <ZustandExamples />
    <ZustandProfileForm />
    <ReduxExamples />
    <Effect />
    <section><h2>Writing Your Own Hooks</h2><WindowSizeDemo /><ToggleDemo /><LocalStorageDemo /><IndependentToggles /><HookProfileForm /></section>
    <p><Link href="/labs/lab4/hooks">Custom hooks</Link> | <Link href="/labs/lab4/profile-form">Compare profile forms</Link></p>
  </div>;
}
