chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension installed");
    if (chrome.sidePanel && typeof chrome.sidePanel.setPanelBehavior === "function") {
      chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true })
        .catch(err => console.error("Error setting panel behavior:", err));
    } else {
      console.warn("sidePanel.setPanelBehavior not supported");
    }
  });
  
  // Listen for action click as a fallback
  chrome.action.onClicked.addListener((tab) => {
    chrome.sidePanel.open({ windowId: tab.windowId })
      .catch(err => console.error("Error opening side panel:", err));
  });