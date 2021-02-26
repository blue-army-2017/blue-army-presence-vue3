import { ActionContext } from 'vuex';
import { Member, MemberModule } from '../../../types';

export default function (context: ActionContext<MemberModule, MemberModule>,
                         member: { id?: string; firstName: string; lastName: string; active: boolean }) {
  const members = [...context.getters.members as Member[]];

  const memberIndex = member.id ? members.findIndex(m => m.id === member.id) : -1;
  const memberData: Member = {
    ...member,
    id: member.id || (Math.random() * 10000).toFixed(0)
  };

  if (~memberIndex) {
    members[memberIndex] = memberData;
  } else {
    members.push(memberData);
  }

  context.commit('members', members);
}