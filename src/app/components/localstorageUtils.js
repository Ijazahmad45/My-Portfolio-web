export const updateSwitchValue = (value) => {
    localStorage.setItem('switchValue', value.toString());
    const event = new Event('switchValueChanged');
    window.dispatchEvent(event);
  };
  