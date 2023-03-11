// className variable is the class name that will be added to the element when it is in the viewport
export const observer = (className) => {
  return new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(className);
      } else {
        entry.target.classList.remove(className);
      }
    });
  });
};