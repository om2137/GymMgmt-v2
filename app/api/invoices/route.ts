import invoices from '@/Jsons/invoices.json'

export async function GET(){
    return Response.json(invoices)
}