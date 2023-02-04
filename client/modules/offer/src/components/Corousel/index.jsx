import * as React from "react";
import { useHistory } from "react-router-dom";
import { useTheme, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { MobileStepper, Button } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const ImageBox = styled(Box)`
  ${({ theme }) => `
    cursor: pointer;
    background-color: ${theme.palette.primary.main};
    &:hover {
        transform: scale(1.1);
        transition: transform 10s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
    `}
`;

const SwipeableStepper = ({ data, isDefaultHeight }) => {
  const theme = useTheme();
  const history = useHistory();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = data.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {data.map((step, index) => (
          <div key={step.id}>
            {Math.abs(activeStep - index) <= 2 ? (
              <ImageBox
                component="img"
                onClick={() => {
                  history.push(step.linkUrl);
                }}
                sx={{
                  height: isDefaultHeight ? "auto" : 450,
                  display: "block",
                  overflow: "hidden",
                  width: "100%",
                }}
                src={step.imageUrl}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
        }
      />
    </Box>
  );
};

export default SwipeableStepper;
