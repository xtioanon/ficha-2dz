import { Personagem } from "./Personagem";

const PERSONAGEM_STORAGE_KEY = "personagem";
const IMAGE_STORAGE_KEY = "imagem";

export function recuperarOuCriarPersonagem(): Personagem
{
    const pjString = localStorage.getItem(PERSONAGEM_STORAGE_KEY);
    let personagem: Personagem;
    if (pjString !== null)
    {
        try {
            personagem = JSON.parse(pjString) as Personagem;
        } catch (error) {
            personagem = new Personagem();
        }
    }
    else
    {
        personagem = new Personagem();
    }
    return personagem;
}

export function salvarPersonagem(pj: Personagem)
{
    const pjString = JSON.stringify(pj);
    localStorage.setItem(PERSONAGEM_STORAGE_KEY, pjString);
}

export function carregarImagem(): string | null
{
    const imgString = localStorage.getItem(IMAGE_STORAGE_KEY);
    if (imgString !== null) return imgString;
    return null;
}

export function salvarImagem(img: string)
{
    localStorage.setItem(IMAGE_STORAGE_KEY, img);
}

export function removerImagem()
{
    localStorage.removeItem(IMAGE_STORAGE_KEY);
}