import { CarAsset as CarAssetTemplate } from "../../generated/templates"
import { CarAsset } from "../../generated/templates/CarAsset/CarAsset"
import { CarShop, CreateChildContract } from "../../generated/CarShop/CarShop"
import { CreateChildContractEntity } from "../../generated/schema"

export function handleCreateChildContract(event: CreateChildContract): void {
    let entity = CreateChildContractEntity.load(event.transaction.hash.toHex())

    if (entity == null) {
        entity = new CreateChildContractEntity(event.transaction.hash.toHex())
    }

    entity.brand = event.params.brand
    entity.model = event.params.model

    entity.save()
    CarAssetTemplate.create(event.params.contractAddress);
}
