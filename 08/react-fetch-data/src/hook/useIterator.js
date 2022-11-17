const { useState, useCallback,useMemo } = require("react")

const useIterator = ({
  items = [],
  initialIndex = 0,
}) => {
  const [index, setIndex] = useState(initialIndex);

  const prev = useCallback(() => {
    if (index === 0) return setIndex(items.length - 1);
    setIndex(index - 1);
  }, [index, items]);

  const next = useCallback(() => {
    if (index === items.length - 1) return setIndex(0);
    setIndex(index + 1);
  }, [index, items]);

  const item = useMemo(() => items[index], [index, items]);

  return [item || items[index], prev, next];
}

export default useIterator;
