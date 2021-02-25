export interface Member {
  id: string;
  firstName: string;
  lastName: string;
  active: boolean;
}

// Store Module Type
export interface MemberModule {
  members: Member[];
}