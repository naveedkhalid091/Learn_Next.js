import { NextRequest, NextResponse } from "next/server";

/*Below mentioned `NextRequest` is a data type which is pre-built 
by the next framework, so we don't need to write seperate 
data type during creation of an API.
*/

export const GET = async (request: NextRequest) => {
  //const url = request.nextUrl;
  return new NextResponse("Hello World");
};

/*Above simple API is created by adding return new NextResponse
You can now access above API from destop version of Postman. 
*/

/*If you will test your above API in postman then it will return 
data in text format. In the next API we will learn to retun data in json.
*/
