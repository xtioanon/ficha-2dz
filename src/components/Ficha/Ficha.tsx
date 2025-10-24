import type { Personagem } from "../../Personagem"

interface FichaProp {
    personagem: Personagem,
    onChange: (key: keyof Personagem, value: string) => void
}

export default function Ficha( ficha: FichaProp )
{
    const personagem = ficha.personagem;
    const handleChange = ficha.onChange;

    return (
        <>
            <div className="justify-center text-center">
                <h1 className="text-4xl">Ficha de Personagem</h1>
            </div>
            <div className="px-2 flex-col items-center py-2 mb-2">
                <div className="flex w-full space-x-1">
                    <label htmlFor="nome" className="font-mono text-2xl mx-5">Nome</label>
                    <input type="text" name="nome" id="nomeInput" defaultValue={personagem.nome} onChange={e=> handleChange("nome", e.target.value)} className="w-full border-b-2 border-black mr-5 bg-transparent font-mono text-2xl" />
                </div>
                <div className="flex w-full space-x-2">
                    <div className="flex w-1/2 space-x-1">
                        <label htmlFor="titulo" className="font-mono text-xl ml-5">Título</label>
                        <input type="text" name="titulo" id="tituloInput" defaultValue={personagem.titulo} onChange={e=> handleChange("titulo", e.target.value)} className="w-full border-b-2 border-black mr-5 bg-transparent text-xl" />
                    </div>
                    <div className="flex w-1/2">
                        <div className="flex w-auto space-x-1">
                            <label htmlFor="pontos" className="font-mono text-xl">Pontos</label>
                            <input type="number" name="pontos" id="pontosInput" defaultValue={personagem.pontos} onChange={e=> handleChange("pontos", e.target.value)} className="w-full border-b-2 text-center border-black mr-5 bg-transparent text-xl" />
                        </div>
                        <div className="flex w-auto space-x-1">
                            <label htmlFor="xp" className="font-mono text-xl">XP</label>
                            <input type="number" name="xp" id="xpInput" defaultValue={personagem.xp} onChange={e=> handleChange("xp", e.target.value)} className="w-full border-b-2 text-center border-black mr-5 bg-transparent text-xl" />
                        </div>
                    </div>
                </div>
            </div>
            <hr className="border-b-2 m-2 border-black"></hr>
            <div className="flex flex-col">
                <div className="text-center">
                    <h1 className="text-2xl font-bold font-mono">Atributos</h1>
                </div>
                <div className="p-5 flex align-middle justify-around space-x-2">
                    <div className="flex flex-col items-center">
                        <label htmlFor="corpo" className="font-mono text-xl">Corpo</label>
                        <input type="number" name="corpo" id="corpoInput" defaultValue={personagem.corpo} onChange={e=> handleChange("corpo", e.target.value)} className="font-mono border-2 w-16 h-8 rounded-md bg-transparent text-center border-black" />
                    </div>
                    <div className="flex flex-col items-center">
                        <label htmlFor="tecnica" className="font-mono text-xl">Técnica</label>
                        <input type="number" name="tecnica" id="tecnicaInput" defaultValue={personagem.tecnica} onChange={e=> handleChange("tecnica", e.target.value)} className="font-mono border-2 w-16 h-8 rounded-md bg-transparent text-center border-black"/>
                    </div>
                    <div className="flex flex-col items-center">
                        <label htmlFor="espirito" className="font-mono text-xl">Espírito</label>
                        <input type="number" name="espirito" id="espiritoInput" defaultValue={personagem.espirito} onChange={e=> handleChange("espirito", e.target.value)} className="font-mono border-2 w-16 h-8 rounded-md bg-transparent text-center border-black"/>
                    </div>
                    <div className="flex flex-col items-center">
                        <label htmlFor="presenca" className="font-mono text-xl">Presença</label>
                        <input type="number" name="presenca" id="presencaInput" defaultValue={personagem.presenca} onChange={e=> handleChange("presenca", e.target.value)} className="font-mono border-2 w-16 h-8 rounded-md bg-transparent text-center border-black"/>
                    </div>
                </div>
            </div>
            <hr className="border-b-2 m-2 border-black"></hr>
            <div className="text-center">
                <h1 className="text-2xl font-bold font-mono">Estatísticas</h1>
            </div>
            <div className="flex w-full p-5 justify-around space-x-2">
                <div className="flex flex-col w-1/2 space border-2 border-black rounded-md text-center">
                    <label htmlFor="vida" className="font-mono text-xl font-black">❤︎ Vida</label>
                    <input type="number" name="vida" id="vidaInput" defaultValue={personagem.vida} onChange={e=> handleChange("vida", e.target.value)} className="bg-transparent font-mono text-xl text-center"/>
                    <hr className="my-2 border-black border-b-2"></hr>
                    <label htmlFor="defesa" className="font-mono text-xl font-black">⛊ Defesa</label>
                    <input type="number" name="defesa" id="defesaInput" defaultValue={personagem.defesa} onChange={e=> handleChange("defesa", e.target.value)} className="bg-transparent font-mono text-xl text-center"/>
                </div>
                <div className="flex flex-col w-1/2 border-2 border-black rounded-md text-center">
                    <label htmlFor="magia" className="font-mono text-xl font-black">⚚ Magia</label>
                    <input type="number" name="magia" id="magiaInput" defaultValue={personagem.magia} onChange={e=> handleChange("magia", e.target.value)} className="bg-transparent font-mono text-xl text-center"/>
                    <hr className="my-2 border-black border-b-2"></hr>
                    <label htmlFor="carisma" className="font-mono text-xl font-black">★ Carisma</label>
                    <input type="number" name="carisma" id="carismaInput" defaultValue={personagem.carisma} onChange={e=> handleChange("carisma", e.target.value)} className="bg-transparent font-mono text-xl text-center"/>
                </div>
            </div>
            <hr className="border-b-2 m-2 border-black"></hr>
            <div className="flex w-full space-x-2 p-5 justify-around items-center">
                <div className="flex flex-col w-1/2 border-2 border-black">
                    <div className="flex flex-col">
                        <h1 className="text-xl font-bold font-mono text-center">Talentos</h1>
                        <textarea name="notes" id="notesArea" defaultValue={personagem.talentos} onChange={e=> handleChange("talentos", e.target.value)} className="bg-transparent pl-2"></textarea>
                    </div>
                    <hr className="my-2 border-black border-b-2"></hr>
                    <div className="flex flex-col">
                        <h1 className="text-xl font-bold font-mono text-center">Estigmas</h1>
                        <textarea name="notes" id="notesArea" defaultValue={personagem.estigmas} onChange={e=> handleChange("estigmas", e.target.value)} className="bg-transparent pl-2"></textarea>
                    </div>
                </div>
                <div className="flex flex-col w-1/2 border-2 border-black">
                    <div className="flex flex-col">
                        <h1 className="text-xl font-bold font-mono text-center">Perícias</h1>
                        <textarea name="notes" id="notesArea" defaultValue={personagem.pericias} onChange={e=> handleChange("pericias", e.target.value)} className="bg-transparent pl-2"></textarea>
                    </div>
                    <hr className="my-2 border-black border-b-2"></hr>
                    <div className="flex flex-col">
                        <h1 className="text-xl font-bold font-mono text-center">Habilidades</h1>
                        <textarea name="notes" id="notesArea" defaultValue={personagem.habilidades} onChange={e=> handleChange("habilidades", e.target.value)} className="bg-transparent pl-2"></textarea>
                    </div>
                </div>
            </div>
            <hr className="border-b-2 m-2 border-black"></hr>
            <div className="flex flex-col w-full p-5">
                <h1 className="text-2xl font-bold font-mono text-center mb-3">Notas</h1>
                <textarea name="notes" id="notesArea" defaultValue={personagem.notas} onChange={e=> handleChange("notas", e.target.value)} className="bg-transparent border-2 border-black rounded-md pl-2"></textarea>
            </div>
            
        </>
    )
}