// Tabs
function openTab(tabId){
    const tabs = document.querySelectorAll('.tab')
    const tabButtons = document.querySelectorAll('.tab-button')
      
    tabs.forEach(tab => {
      if(tab.id === tabId){
        tab.classList.add('active-tab')
      }
      else{
        tab.classList.remove('active-tab')
      }
    })
    tabButtons.forEach(button => {
      if(button.getAttribute('onclick').includes(tabId)){
        button.classList.add('active')
      }else{
        button.classList.remove('active')
      }
    })
  }