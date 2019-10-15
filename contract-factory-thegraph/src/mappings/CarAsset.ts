import { CarAsset, OwnershipTransferred } from "../../generated/templates/CarAsset/CarAsset"
import { OwnershipTransferredEntity } from "../../generated/schema"

export function handleOwnershipTransferred(event: OwnershipTransferred): void {
    let entity = OwnershipTransferredEntity.load(event.transaction.hash.toHex())

    if (entity == null) {
        entity = new OwnershipTransferredEntity(event.transaction.hash.toHex())
    }

    entity.newowner = event.params.newOwner

    entity.save()
}