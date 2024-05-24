import { TRANSITIONS } from '@/theme';
import { Box, transition } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Props {
  children: React.ReactNode;
  layout?: boolean;
  className?: string;
  direction?: 'left' | 'right' | 'up' | 'down' | 'none';
  distance?: number;
  durationIn?: number;
  durationOut?: number;
  style?: string;
  elementType? : string;
}

function Transition(props: Props) {
  const {
    children,
    layout = false,
    className,
    direction = 'none',
    distance = 50,
    durationIn,
    durationOut,
  } = props;
  const directions = {
    left: { x: -distance },
    right: { x: distance },
    up: { y: -distance },
    down: { y: distance },
    none: { x: 0, y: 0 },
  };
  const transitionIn = {
    type: 'spring',
    duration: durationIn,
  };
  const animationConfig = {
    in: {
      opacity: 0,
      ...directions[direction],
    },
    animate: {
      opacity: 1,
      ...directions.none,
      transition: {
        x: transitionIn,
        y: transitionIn,
      },
    },
    out: {
      opacity: 0,
      ...directions[direction],
      transition: {
        type: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        duration: durationOut,
      },
    },
  };

  const [styles, setStyles] = useState({});

  useEffect(() => {
    switch (props.elementType) {
      case 'homeCardContainer':
        setStyles({
          display: "grid",
          width: "inherit",
          columnGap: "30px",
          rowGap: "25px",
          // transition: "10s cubic-bezier(0.34, 1.56, 0.64, 1)",
          gridTemplateRows: "repeat(4, 1fr) min-content",
          gridTemplateColumns: "1fr max(25%, 170px)"
        });
        break;
      // Add other cases if needed
      default:
        setStyles({});
        break;
    }
  }, [props.elementType]);


  return (
    <Box
      as={motion.div}
      layout={layout}
      className={className}
      variants={animationConfig}
      initial="in"
      animate="animate"
      exit="cubic-bezier(0.34, 1.56, 0.64, 1)"
      style={styles}
    >
      {children}
    </Box >
  );
}

export default Transition;