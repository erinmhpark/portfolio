import { IconButton, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

function DarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
      <IconButton
        onClick={toggleColorMode}
        icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        aria-label="Change theme"
        variant="ghost"
        color="gray.500"
      />
    </div>
  );
}

export default DarkMode;
