import { Grid, GridItem } from "@chakra-ui/react"
import { DashBoardLayout } from "../../components/DashBoardLayout"
import { Portfoliosection } from "./components/Portfoliosection"
import { PriceSection } from "./components/PriceSection"
import { Transaction } from "./components/Transaction"
import { InfoCard } from "./components/InfoCard"


export const DashBoard = () => {
  return (
    
        <DashBoardLayout title="DashBoard">
            <Grid 
            gap="6"
            gridTemplateColumns={{
                base:"repeat(1, 1fr)",
                xl:"repeat(2, 1fr)",
            }}>
                <GridItem
                colSpan={{
                    base:"1",
                    xl:"2"
                }}
                >
           <Portfoliosection/>
                    
                </GridItem >
                <GridItem 
                colSpan="1"
                >
           <PriceSection />

                </GridItem>
                <GridItem 
                colSpan="1"
                >
           <Transaction />

                </GridItem>
                <GridItem 
                colSpan="1"
                >
           <InfoCard 
           imgUrl="/dot_bg.svg"
           text="Learn more about Loans keep your Bitcoins, access it's value without selling it"
           tagtext="Loan"
           inverted={false}
           />

                </GridItem>
                <GridItem 
                colSpan="1"
                >
           <InfoCard 
           imgUrl="/grid_bg.svg"
           tagtext="Contact"
           text="Learn more about Loans keep your Bitcoins, access it's value without selling it"
           inverted={true}
           />

                </GridItem>
            </Grid>
            </DashBoardLayout>
    
  )
}
