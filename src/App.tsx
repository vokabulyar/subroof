import "./App.css";
import { Card } from "./components/ui-kit/Card/Card";
import { Paper } from "./components/ui-kit/Paper";

function App() {
  return (
    <div className="App">
      <Paper
        className="fursonas-gallery"
        title="Можно начинать"
        subTitle="Выберите тип фурсоны"
      >
        <div className="content">
          <Card className="furry-card">
            <div className="furry-card__image" />
            <div className="furry-card__title">Furry type</div>
          </Card>
          <Card className="furry-card">
            <div className="furry-card__image" />
            <div className="furry-card__title">Furry type</div>
          </Card>
          <Card className="furry-card">
            <div className="furry-card__image" />
            <div className="furry-card__title">Furry type</div>
          </Card>
          <Card className="furry-card">
            <div className="furry-card__image" />
            <div className="furry-card__title">Furry type</div>
          </Card>
          <Card className="furry-card">
            <div className="furry-card__image" />
            <div className="furry-card__title">Furry type</div>
          </Card>
        </div>
      </Paper>
    </div>
  );
}

export default App;
