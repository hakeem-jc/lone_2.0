import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Define all your form data types
export type AccountInfoData = {
  firstName: string;
  middleName: string;
  lastName: string;
  dateOfBirth: string;
  emailAddress: string;
  phoneNumber: string;
  monthlyIncome: string;
  monthlyRent: string;
  street: string;
  city: string;
  state: string;
  zipcode: string;
  housingStatus: string;
};

export type KYCData = {
  fileName: string;
  fileData?: File;
};

export type PrivacyPolicyData = {
  privacyPolicy: boolean;
};

export type LoanInfoData = {
  loanAmount: number;
  repaymentDate: string;
};

type LoanApplicationState = {
  accountInfo: AccountInfoData | null;
  kyc: KYCData | null;
  privacyPolicy: PrivacyPolicyData | null;
  loanInfo: LoanInfoData | null;
  
  // Current step tracking
  currentMainStep: number;
  currentAccountInfoStep: string;
  
  // Actions
  setAccountInfo: (data: AccountInfoData) => void;
  setKYC: (data: KYCData) => void;
  setPrivacyPolicy: (data: PrivacyPolicyData) => void;
  setLoanInfo: (data: LoanInfoData) => void;
  setCurrentMainStep: (step: number) => void;
  setCurrentAccountInfoStep: (step: string) => void;
  
  // Reset function
  resetApplication: () => void;
  
  // Get complete application data
  getCompleteApplication: () => {
    accountInfo: AccountInfoData | null;
    kyc: KYCData | null;
    privacyPolicy: PrivacyPolicyData | null;
    loanInfo: LoanInfoData | null;
  };
};

// Initial state
const initialState = {
  accountInfo: null,
  kyc: null,
  privacyPolicy: null,
  loanInfo: null,
  currentMainStep: 0,
  currentAccountInfoStep: 'one',
};

// Create the store
export const useLoanStore = create<LoanApplicationState>()(
  persist(
    (set, get) => ({
      ...initialState,
      
      // Actions
      setAccountInfo: (data) => set({ accountInfo: data }),
      
      setKYC: (data) => set({ kyc: data }),
      
      setPrivacyPolicy: (data) => set({ privacyPolicy: data }),
      
      setLoanInfo: (data) => set({ loanInfo: data }),
      
      setCurrentMainStep: (step) => set({ currentMainStep: step }),
      
      setCurrentAccountInfoStep: (step) => set({ currentAccountInfoStep: step }),
      
      resetApplication: () => set(initialState),
      
      getCompleteApplication: () => {
        const state = get();
        return {
          accountInfo: state.accountInfo,
          kyc: state.kyc,
          privacyPolicy: state.privacyPolicy,
          loanInfo: state.loanInfo,
        };
      },
    }),
    {
      name: 'loan-application-storage',
      // Optional: Only persist certain fields
      partialize: (state) => ({
        accountInfo: state.accountInfo,
        kyc: state.kyc,
        privacyPolicy: state.privacyPolicy,
        loanInfo: state.loanInfo,
        currentMainStep: state.currentMainStep,
        currentAccountInfoStep: state.currentAccountInfoStep,
      }),
    }
  )
);