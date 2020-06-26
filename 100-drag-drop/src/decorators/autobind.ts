// AutoBind decorator
export const AutoBind = (
  // To avoid getting unused error use _ to ignore them
  // target: any,
  // methodName: string,
  _1: any,
  _2: string,
  descriptor: PropertyDescriptor
) => {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    }
  };
  return adjDescriptor;
};
