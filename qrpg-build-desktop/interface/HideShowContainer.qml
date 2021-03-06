import Qt 4.7

Item {
  state: "Hide"
  id: container

  function hide() {
    state = "Hide";
  }

  function show() {
    state = "Show";
  }

  function toggleVisible() {
    console.log("toggleVisible")
    if(state == "Show")
      state = "Hide";
    else
      state = "Show";
  }

  function center() {
    anchors.centerIn = parent;
  }

  states: [
    State {
      name: "Hide"

      PropertyChanges {
        target: container
        opacity: 0
        scale: .75
        focus: false
      }

    },
    State {
      name: "Show"

      PropertyChanges {
        target: container
        opacity: 1
        scale: 1
      }
    }
  ]

  transitions: [
    Transition {
      to: "Hide"
      PropertyAnimation {
        properties: "opacity"
        duration: 150
      }
      PropertyAnimation {
        properties: "scale"
        duration: 350
        easing.type: Easing.Linear
      }
    },

    Transition {
      to: "Show"
      PropertyAnimation {
        properties: "opacity"
        duration: 225
      }
      PropertyAnimation {
        properties: "scale"
        duration: 350
        easing.type: Easing.OutBack
      }
      ScriptAction {
        script: console.log("SHOW");
      }
    }

  ]
}
