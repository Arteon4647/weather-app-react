import { Header } from "../../ui/common/Header";
import { Layout } from "../../ui/common/Layout";
import { HistoryList } from "../../ui/history/HistoryList";

export const History = () => {
  return (
    <div>
      <Header />
      <Layout>
        <HistoryList />
      </Layout>
    </div>
  );
};
