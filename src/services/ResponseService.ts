import type { AnalysisEnum } from "@/types/Analysis";
import type { Response } from "@/types/Response";

const RESPONSE_KEY = "teste_respostas";

export class ResponseService {

  static carregar(): Response[] {
    const data = localStorage.getItem(RESPONSE_KEY);
    return data ? JSON.parse(data) : [];
  }

  static salvar(responses: Response[]) {
    localStorage.setItem(RESPONSE_KEY, JSON.stringify(responses));
  }

  static push(id: number, idQuestion: number, resp: AnalysisEnum[]) {
     const responses = this.carregar();

    const index = responses.findIndex(r => r.idQuestion === idQuestion);

    if (index !== -1) {
      responses[index]!.responses = resp;
    } else {
      responses.push({
        id,
        idQuestion,
        responses: resp
      });
    }

    this.salvar(responses);
  }

  static getCurrentId(): number{
    return this.carregar().length + 1;
  }

  static limpar() {
    localStorage.removeItem(RESPONSE_KEY);
  }
}
