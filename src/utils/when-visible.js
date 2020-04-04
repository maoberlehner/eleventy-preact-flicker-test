module.exports = function whenVisible($element, callback, options) {
  if (typeof IntersectionObserver === `undefined`) {
    callback();
    return;
  }

  // eslint-disable-next-line compat/compat
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      observer.unobserve($element);
      callback();
    });
  }, options);
  observer.observe($element);
};
