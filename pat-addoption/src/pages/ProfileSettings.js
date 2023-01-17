import React from "react";
import FormProfileSetting from "../components/ProfileSetting/FormProfileSetting";
import SaveButton from "../components/ProfileSetting/SaveButton";

import Header from "../components/Header";

export default function ProfileSettings() {
  return (
    <div>
      <Header>
        <h2>Profile Settings</h2>
      </Header>
      <FormProfileSetting />
      <SaveButton />
    </div>
  );
}
