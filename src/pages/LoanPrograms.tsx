import { useEffect } from "react";

const LoanProgramsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <h1 className="text-3xl font-bold text-foreground">Loan Programs</h1>
    </div>
  );
};

export default LoanProgramsPage;
