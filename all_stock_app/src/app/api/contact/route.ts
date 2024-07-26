import { error } from "console";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req:NextRequest) {
  console.log('GMAILUSER:', process.env.GMAILUSER);
  console.log('GMAILPASS:', process.env.GMAILPASS);

  const body = await req.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.GMAILUSER,
      pass: process.env.GMAILPASS,
    },
    tls: {
      rejectUnauthorized: false
    }
  })

  const mailOptions = {
    from: body.email,
    to: "daito012221@gmail.com",
    subject: `[お問い合わせ] ${body.name}様より`,
    text: `${body.contents} Send from ${body.email}`,
    html: `
      <p>【名前】</p>
      <p>${body.name}</p>
      <p>【年齢】</p>
      <p>${body.age}</p>
      <p>【性別】</p>
      <p>${body.gender}</p>
      <p>【メールアドレス】</p>
      <p>${body.email}</p>
      <p>【お問い合わせ内容】</p>
      <p>${body.contents}</p>
    `,
  }

  try{
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: '成功しました!' });
  } catch (err){
    console.log(err);
    if (err instanceof Error) {
      return NextResponse.json({ message: '失敗しました。', error: err.message }, { status: 500 });
    } else {
      return NextResponse.json({ message: '失敗しました。', error: 'Unknown error' }, { status: 500 });
    }
  }
}