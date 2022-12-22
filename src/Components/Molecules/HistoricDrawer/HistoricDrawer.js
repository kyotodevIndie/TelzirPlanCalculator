import {
  Text,
  HStack,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  useDisclosure,
  VStack,
  Tooltip,
  Box
} from '@chakra-ui/react';
import { FaTrashAlt, FaHistory } from 'react-icons/fa';
import { useCalculatorValues } from '../../../Contexts/CalculatorContext';
import FormatCurrency from '../../../Helpers/FormatCurrency/FormatCurrency';

function HistoricDrawer() {
  const { historic, handleDeleteLocalStoageData, handleGetHistoric } = useCalculatorValues();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleOpen = () => {
    handleGetHistoric();
    onOpen();
  };

  return (
    <Box>
      <Tooltip label="Histórico" aria-label="historic">
        <IconButton aria-label="Open historic" icon={<FaHistory />} onClick={handleOpen} />
      </Tooltip>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="background">
          <DrawerCloseButton />
          <HStack>
            <DrawerHeader>Histórico</DrawerHeader>
            <Tooltip label="Deletar todo o historico" aria-label="delete historic">
              <IconButton
                aria-label="Open historic"
                icon={<FaTrashAlt />}
                onClick={handleDeleteLocalStoageData}
                ml={5}
                align="center"
                variant="ghost"
              />
            </Tooltip>
          </HStack>

          <DrawerBody>
            {historic.map((item, index) => (
              <VStack
                mb={5}
                pb={5}
                key={index}
                spacing="2"
                align="start"
                borderBottom={1}
                borderStyle="solid"
                borderColor="gray.500"
              >
                <HStack>
                  <Text as="b">DDD de origem:</Text> <Text>{item.originDDD}</Text>
                </HStack>
                <HStack>
                  <Text as="b">DDD de destino:</Text> <Text>{item.destinyDDD}</Text>
                </HStack>
                <HStack>
                  <Text as="b">Tempo de ligação:</Text> <Text>{item.callTime} min</Text>
                </HStack>
                <HStack>
                  <Text as="b">Tipo de Plano:</Text> <Text>{`Fale Mais ${item.planType}`}</Text>
                </HStack>
                <HStack>
                  <Text as="b">COM plano:</Text> <Text>{FormatCurrency(item.result.withPlan)}</Text>
                </HStack>
                <HStack>
                  <Text as="b">SEM plano:</Text>
                  <Text>{FormatCurrency(item.result.withoutPlan)}</Text>
                </HStack>
              </VStack>
            ))}
            {historic.length === 0 && <Text>Você não fez nenhum calculo ainda</Text>}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default HistoricDrawer;
