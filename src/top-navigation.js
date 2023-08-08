import { Tab } from '@mui/base/Tab';
import { TabsList } from '@mui/base/TabsList';
import { TabPanel } from '@mui/base/TabPanel';
import { Tabs } from '@mui/base/Tabs';

export default function MyApp() {
  return (
    <Tabs>
      <TabsList>
        <Tab>{/* tab one */}</Tab>
        <Tab>{/* tab two */}</Tab>
      </TabsList>
      <TabPanel>{/* panel one */}</TabPanel>
      <TabPanel>{/* panel two */}</TabPanel>
    </Tabs>
  );
}