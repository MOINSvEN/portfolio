import { Tab } from '@mui/base/Tab';
import { TabsList } from '@mui/base/TabsList';
import { TabPanel } from '@mui/base/TabPanel';
import { Tabs } from '@mui/base/Tabs';

export default function MyApp() {
  return (
    <Tabs>
      <TabsList>
        <Tab>{ Home }</Tab>
        <Tab>{ Impressum }</Tab>
      </TabsList>
      <TabPanel>{ eins }</TabPanel>
      <TabPanel>{ zwei }</TabPanel>
    </Tabs>
  );
}