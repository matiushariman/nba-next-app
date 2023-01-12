import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { TeamDetails } from './TeamDetails';

const Story: ComponentMeta<typeof TeamDetails> = {
  component: TeamDetails,
  title: 'blocks/TeamDetails',
};
export default Story;

const Template: ComponentStory<typeof TeamDetails> = (args) => (
  <TeamDetails {...args} />
);

export const GameHasNotStarted = Template.bind({});
GameHasNotStarted.args = {
  teamId: '1610612738',
  teamName: 'Celtics',
  teamAbbr: 'BOS',
  score: 122,
  hasGameStarted: false,
  teamRecord: '82-0',
};

export const MidGameOrLoser = Template.bind({});
MidGameOrLoser.args = {
  teamId: '1610612738',
  teamName: 'Celtics',
  teamAbbr: 'BOS',
  score: 122,
  hasGameStarted: true,
  teamRecord: '82-0',
  isWinner: false,
};

export const FinalAndWinner = Template.bind({});
FinalAndWinner.args = {
  teamId: '1610612738',
  teamName: 'Celtics',
  teamAbbr: 'BOS',
  score: 122,
  hasGameStarted: true,
  teamRecord: '82-0',
  isWinner: true,
};
