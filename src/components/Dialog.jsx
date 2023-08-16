import { Text, Dialog as ELDialog } from "@rneui/themed";
import React from "react";

function Dialog({ title, content, open }) {
  return (
    <ELDialog isVisible={open}>
      <ELDialog.Title title={title} />
      <Text>{content}</Text>
      <ELDialog.Actions>
        <ELDialog.Button
          title="Ok"
          onPress={() => console.log("Primary Action Clicked!")}
        />
      </ELDialog.Actions>
    </ELDialog>
  );
}

export default Dialog;
