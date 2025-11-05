import ImageKit from "imagekit";

import { NextResponse } from "next/server";
import { env } from "../../../env/index";

const imagekit = new ImageKit({
  publicKey: env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY,
  privateKey: env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT
});

export async function GET(){
  return NextResponse.json(imagekit.getAuthenticationParameters());
}
