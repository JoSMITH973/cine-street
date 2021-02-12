const AWS = require ('aws-sdk')

function main (){
    AWS.config.update({
      secretAccessKey: 'AKIAJN473PUXRTSFFFSQ',
      accessKeyId: 'o4ZvVqbJnaLTWdr5NOeHaP5XEnzaNcRELzsPu/lb',
      region: 'eu-west-3'
    });
console.log("coucou")

    const S3 = new AWS.S3({
        params: { Bucket: 'cine-street' },
      })
      
      S3.listObjects((err, data)=> {
         //console.log(err, data)
      })

      S3.getObject({Key:'santa.png'},(err,data)=>{
          //console.log(err,data)
      })
}

main()


