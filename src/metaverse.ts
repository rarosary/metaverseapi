import {
  Transfer as TransferEvent,
  
} from "../generated/metaverse/metaverse"
import {
  metaverse, User
} from "../generated/schema"


/*export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.tokenId = event.params.tokenId
  entity.save()
}*/
export function handleTransfer(event: TransferEvent): void {
  /* load the token from the existing Graph Node */
  let token = metaverse.load(event.params.tokenId.toString())
  if (!token) {
    /* if the token does not yet exist, create it */
    token = new metaverse(event.params.tokenId.toString())
    token.metaverseID = event.params.tokenId
 
    
   }
  token.updatedAtTimestamp = event.block.timestamp

  /* set or update the owner field and save the token to the Graph Node */
  token.owner = event.params.to.toHexString()
  token.save()
  
  /* if the user does not yet exist, create them */
  let user = User.load(event.params.to.toHexString())
  if (!user) {
    user = new User(event.params.to.toHexString())
    user.save()
  }
 }
