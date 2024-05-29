import { auth, currentUser } from "@clerk/nextjs";
import { ACTION, ENTITY_TYPE } from "@prisma/client";
import { db } from "@/lib/db";

interface Props {
  entityId: string;
  entityType: ENTITY_TYPE;
  action: ACTION;
  entityTitle: string;
}

export const createAuditLog = async (props: Props) => {
  try {
    const { orgId } = auth();
    const user = await currentUser();

    if (!orgId || !user) {
      throw new Error("User not found");
    }

    const { entityId, entityType, action, entityTitle } = props;
    await db.auditLog.create({
      data: {
        orgId,
        entityId,
        entityType,
        action,
        entityTitle,
        userId: user.id,
        userName: user?.firstName + " " + user?.lastName,
        userImage: user?.imageUrl,
      },
    });
  } catch (error) {
    console.log("[AUDIT LOG ERROR]", error);
  }
};
