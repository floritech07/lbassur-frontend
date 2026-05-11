import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    
    // On ajoute la clé d'accès Web3Forms (à mettre dans votre .env.local)
    const apiKey = process.env.WEB3FORMS_ACCESS_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { success: false, message: "La clé d'accès Web3Forms est manquante dans les variables d'environnement." },
        { status: 500 }
      );
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: apiKey,
        ...formData,
      }),
    });

    const result = await response.json();

    if (result.success) {
      return NextResponse.json({ success: true, message: "Message envoyé avec succès !" });
    } else {
      return NextResponse.json(
        { success: false, message: result.message || "Une erreur est survenue." },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Erreur Contact API:", error);
    return NextResponse.json(
      { success: false, message: "Erreur serveur lors de l'envoi du message." },
      { status: 500 }
    );
  }
}
