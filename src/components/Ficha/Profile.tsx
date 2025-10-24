import React, { useEffect, useRef, useState } from "react";
import type { Personagem } from "../../Personagem";
import { carregarImagem, removerImagem, salvarImagem } from "../../Storage";

interface ProfileProp {
    personagem: Personagem,
    onChange: (key: keyof Personagem, value: string) => void
}

export default function Profile( { personagem, onChange }: ProfileProp)
{
    const [img, setImg] = useState<string|null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const img = carregarImagem();
        if (img) setImg(img);
    }, []);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = () => {
            const b64 = reader.result as string;
            setImg(b64);
            salvarImagem(b64);
        };
        reader.readAsDataURL(file);
    };

    const handleClick = () => {
        fileInputRef.current?.click();
    }

    const handleRemove = (e: React.MouseEvent) => {
        e.stopPropagation();
        setImg(null);
        removerImagem();
    }

    return (
        <>
            <div className="justify-center text-center">
                <h1 className="text-4xl">Ficha de Personagem</h1>
            </div>
            <div className="px-2 flex-col items-center py-2 mb-2">
                <div className="flex w-full space-x-1">
                    <label htmlFor="nome" className="font-mono text-2xl mx-5">Nome</label>
                    <input type="text" name="nome" id="nomeInput" defaultValue={personagem.nome} onChange={e=> onChange("nome", e.target.value)} className="w-full border-b-2 border-black mr-5 bg-transparent font-mono text-2xl" />
                </div>
            </div>
            <hr className="border-b-2 m-2 border-black"></hr>
            <div className="flex flex-1 space-y-2">
                <div className="relative flex w-1/3 h-f border-black border-2 m-2" onClick={handleClick}>
                    {img ? (
                        <>
                            <img src={img} alt="Personagem" className="object-cover w-full h-full" />
                            <button onClick={handleRemove} className="print:hidden absolute top-0 right-0 p-4 bg-red-600 text-white rounded-full text-xs hover:bg-red-700">X</button>
                        </>
                    ) : (
                        <>
                            <span className="text-gray-500 text-sm">Escolher imagem</span>
                            <input type="file" name="personagem" id="personagemImagem" accept="imagem/*" ref={fileInputRef} onChange={handleImageChange} className="hidden" />
                        </>
                    )}
                </div>
                <div className="flex flex-col w-1/3 h-f border-black border-2 m-2">
                    <h1 className="text-2xl font-bold font-mono text-center mb-3">Items</h1>
                    <textarea name="notes" id="notesArea" defaultValue={personagem.items} onChange={e=> onChange("items", e.target.value)} className="bg-transparent w-full h-full"></textarea>
                </div>
                <div className="flex flex-col w-1/3 h-full border-black border-2 m-2">
                    <h1 className="text-2xl font-bold font-mono text-center mb-3">História</h1>
                    <textarea name="notes" id="notesArea" defaultValue={personagem.historia} onChange={e=> onChange("historia", e.target.value)} className="bg-transparent w-full h-full"></textarea>
                </div>
            </div>
        </>
    )
}