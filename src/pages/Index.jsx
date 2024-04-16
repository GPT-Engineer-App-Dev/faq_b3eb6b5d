import { Box, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Heading } from "@chakra-ui/react";
import { FaQuestionCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={4}>
      <Heading as="h2" size="xl" textAlign="center" mb={8}>
        <FaQuestionCircle style={{ marginRight: "12px" }} />
        Frequently Asked Questions
      </Heading>

      <Accordion allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                How do I place an order?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>To place an order, browse our product catalog, select the items you wish to purchase and add them to your cart. Then proceed to checkout, enter your shipping and payment details, and confirm your order. You will receive an order confirmation email with the details.</AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                What payment methods do you accept?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>We accept Visa, Mastercard, American Express, Discover, PayPal, Apple Pay and Google Pay. All transactions are securely processed.</AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                How long does shipping take?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>Shipping times vary based on your location and selected shipping method. Standard shipping typically takes 3-5 business days, while expedited options are available for faster delivery. You will receive a tracking number when your order ships to track its progress.</AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                What is your return policy?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>We accept returns within 30 days of purchase for a full refund, provided the items are in new and unused condition with all original packaging. To initiate a return, please contact our customer service team for instructions. Return shipping costs are the responsibility of the customer.</AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default Index;
